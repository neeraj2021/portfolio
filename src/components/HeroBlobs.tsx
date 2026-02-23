export function HeroBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute -left-40 -top-24 h-80 w-80 blur-3xl opacity-70"
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="blobGradient1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient1)"
          d="M33.3,-47.3C42.8,-39.5,48.7,-28.3,52.7,-16.2C56.7,-4.1,58.7,9,55.3,21.1C52,33.2,43.4,44.3,32.4,52.1C21.5,59.9,10.7,64.4,-1.4,66.4C-13.5,68.4,-27,67.9,-38.2,61.3C-49.4,54.7,-58.4,42.1,-63.1,28.3C-67.8,14.6,-68.3,-0.4,-63.6,-13.5C-59,-26.6,-49.3,-37.8,-38.1,-45.6C-26.9,-53.4,-13.4,-57.9,-0.4,-57.2C12.7,-56.4,25.3,-50.1,33.3,-47.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute -right-32 top-40 h-88 w-88 blur-3xl opacity-60"
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="blobGradient2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient2)"
          d="M39.8,-57C52.1,-51,63.3,-43,67.7,-32.1C72.1,-21.3,69.7,-7.7,65.5,5.6C61.3,18.9,55.3,31.8,45.7,41.6C36,51.3,22.8,57.8,8.2,60.9C-6.4,63.9,-21.4,63.4,-34.6,57.6C-47.8,51.9,-59.2,40.8,-66.1,27.3C-73,13.8,-75.4,-2.1,-70.8,-15.6C-66.2,-29.1,-54.7,-40.3,-42,-45.9C-29.4,-51.5,-14.7,-51.5,-0.5,-50.8C13.8,-50.1,27.5,-48.7,39.8,-57Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}
