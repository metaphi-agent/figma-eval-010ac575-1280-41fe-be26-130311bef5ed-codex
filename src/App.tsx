import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Page1 = lazy(() => import('./pages/Page1'))
const Page2 = lazy(() => import('./pages/Page2'))

function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1170px] px-6 py-10 text-[16px] leading-[26px] text-[var(--color-muted)]">
        Loading…
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to="/page-1" replace />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="*" element={<Navigate to="/page-1" replace />} />
      </Routes>
    </Suspense>
  )
}
