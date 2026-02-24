import React from 'react'

const Bottom = () => {
  return (
    <section className="w-full bg-zinc-900 text-yellow-400 text-center py-4 mt-10">
      <p className="text-md font-medium">
        &copy; {new Date().getFullYear()} Fernandhito. All rights reserved.
      </p>
    </section>
  )
}

export default Bottom