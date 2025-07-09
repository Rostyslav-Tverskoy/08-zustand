import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetchNoteById } from "../../../lib/api"
import NoteDetailsClient from './NoteDetails.client';


type Props = {
  params:{id: string};
}


export async function generateMetadata({params} : Props) {

   const idk = Number(params.id);

   const note = await fetchNoteById(idk);

   return {
    title: note.title,
    description: note.content,
    openGraph: {
      title: note.title,
      description: note.content,
      url: `https://07-routing-nextjs-gamma-two.vercel.app/notes/${idk}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
          width: 1200,
          height: 630,
          alt: note.title,
        }
      ]
    }
   }




}



const NoteDetails = async ({params}: Props) => {
const id = Number(params.id);

const queryClient = new QueryClient();


await queryClient.prefetchQuery({
queryKey:["note", id ],
queryFn: () => fetchNoteById(id),
})




return (
  <div>
    <HydrationBoundary state={dehydrate(queryClient)}>
    <NoteDetailsClient id={id} />
    </HydrationBoundary>
  </div>
)

}


export default NoteDetails;
