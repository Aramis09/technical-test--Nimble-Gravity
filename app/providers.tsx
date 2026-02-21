'use client'
import { getQueryClient } from '@/config/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster/>
    </QueryClientProvider>
  )
}