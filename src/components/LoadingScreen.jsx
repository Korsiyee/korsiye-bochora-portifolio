import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-screen">
      <div className="loader-container">
        <div className="loader"></div>
        <h2 className="loader-text">Koorsiye Bochora</h2>
        <p className="loader-subtitle">Full Stack Developer</p>
      </div>
    </div>
  )
}

export default LoadingScreen
