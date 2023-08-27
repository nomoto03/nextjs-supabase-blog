import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '../utils/database.types'

export const dynamic = 'force-dynamic'

// Server Components内でSupabaseクライアントを作成して返す
export const createClient = () =>
  createServerComponentClient<Database>({ cookies })