import React from 'react'
import Header from './header'
function gridgen() {
  return (
    <div className="flex items-center h-screen overflow-hidden">
      <div className="mt-72 max-w-3xl">
        <Header currentpage="gg"/>
        <div className="overflow-auto flex flex-col gap-5 max-h-screen pb-72">
        <p className="mx-auto pt-5">Grid Generator</p>
          <a href="https://grid-generator-jrr.vercel.app/" className="mx-auto pt-5 text-red-500 underline">Click  here to get into my website</a>
          <img width="80%" className="mx-auto" src="/images/grid-gen/overview.png" />
          <p className="mx-auto">This is what this page looks like</p>
          <img width="70%" className="mx-auto" src="/images/grid-gen/split.gif" />
          <p className="mx-auto">You can click to split a space and change split direction</p>
          <p className="mx-auto text-slate-500">*You can adjust resolution of canva for example I use 10x10 default is 3x3*</p>
          <img width="70%" className="mx-auto" src="/images/grid-gen/generate.gif" />
          <p className="mx-auto">You can click generate button to gen your html and css code</p>
          <img width="80%" className="mx-auto" src="/images/grid-gen/product.png" />
          <p className="mx-auto">This is how it look like when you copy the code</p>
        </div>
      </div>
      

    </div>
  )
}

export default gridgen