import React from 'react'
import Header from './header'
function steamappnews() {
    return (
      <div className="flex items-center h-screen overflow-hidden">
          <div className="mt-72 max-w-3xl">
            <Header currentpage="san"/>
            <div className="overflow-auto flex flex-col gap-5 max-h-screen pb-72">
              <p className="mx-auto pt-5">Steam App News</p>
              <a href="https://steam-app-news-graph.vercel.app" className="mx-auto pt-5 text-red-500 underline">Click  here to get into my website</a>
              <img width="80%" className="mx-auto" src="/images/steam/overview.png" />
              <p className="mx-auto">This is what this page looks like</p>
              <div className="flex flex-row items-center">
                <img width="30%" src="/images/steam/appid.png" className="mr-10 ml-10" />
                <p>First you need to type app id<br/>easiest way is to go to store page and check Url<br/>For example Left4dead2 is 550</p>
              </div>
              <img width="80%" className="mx-auto" src="/images/steam/enter.gif" />
              <p className="mx-auto">Type down your app id and enter, graph will showup</p>
              <img width="80%" className="mx-auto" src="/images/steam/click.gif" />
              <p className="mx-auto">Each point on graph will give you a title and release date</p>
              <p className="mx-auto">and when you click ...boom news is popup</p>
            </div>
          </div>

    
        </div>
      )
    }

export default steamappnews