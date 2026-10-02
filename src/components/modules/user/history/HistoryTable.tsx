import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BlogPost } from "@/types"

export default function HistoryTable({posts}:{posts:BlogPost[]}) {
  return (
    <div><Table>
  <TableHeader>
    <TableRow>
      <TableHead>Title</TableHead>
      <TableHead>Views</TableHead>
      <TableHead>Featured</TableHead>
      <TableHead>Tags</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      posts.map((item) => {
        return (
      <TableRow key={item.id}>
      <TableCell>{item?.title}</TableCell>
      <TableCell>{item?.views}</TableCell>
      <TableCell>{item?.isFeatured}</TableCell>
      <TableCell>{item?.tags}</TableCell>
    </TableRow>
        )
      })
    }
  </TableBody>
</Table></div>
  )
}
