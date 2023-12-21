import React from 'react'
import Header from './header'
function gallery() {
  return (
    <div className="flex items-center h-screen overflow-hidden">
      <div className="mt-72 max-w-3xl">
        <Header currentpage="g" />
        <div className="overflow-auto flex flex-col gap-5 max-h-screen pb-72">
          <p className="mx-auto pt-5">Gallery</p>
          <a href="https://gallery-jrr.vercel.app/" className="mx-auto pt-5 text-red-500 underline">Click  here to get into my website</a>
          <img width="80%" className="mx-auto" src="/images/gallery/overview.png" />
          <p className="mx-auto">This is what this page looks like</p>
          <div className="flex flex-row items-center">
            <img width="30%" src="/images/gallery/showDes.gif" className="mr-10 ml-10" />
            <p>You can click a picture to see the description</p>
          </div>
          <img src="/images/gallery/delete.gif" width="80%" className="mx-auto" />
          <p className="mx-auto">You can easily delete picture by click red button while description is showing</p>
          <img width="80%" className="mx-auto" src="/images/gallery/add.gif" />
          <p className="mx-auto">You can add a image by using Url or upload your picture</p>
          <img width="80%" className="mx-auto" src="/images/gallery/search.gif" />
          <p className="mx-auto">You can search picture by title or description</p>
          <div className="flex flex-row items-center gap-1 items-center justify-center">
            <img width="30%" src="/images/gallery/coolban.gif" />
            <img width="30%" src="/images/gallery/catban.gif" />
            <img width="30%" src="/images/gallery/dogban.gif" />
          </div>
          <p className="mx-auto">You can click banner for a specific search</p>
        </div>
      </div>
    </div>
  );
}

export default gallery