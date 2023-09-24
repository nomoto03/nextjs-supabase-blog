import BlogEdit from "@/app/components/blog/blog-edit"
import { createClient } from "@/utils/spabase-server"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    blogId: string
  }
}

// ブログ編集ページ
const BlogEditPage = async ({params}: PageProps) => {
  const supabase = createClient()

  // ブログ詳細取得
  const { data: blog } = await supabase.from('blogs').select().eq('id', params.blogId).single()

  // ブログが存在しない場合
  if (!blog) return notFound()

  return <BlogEdit blog={blog} />
}

export default BlogEditPage