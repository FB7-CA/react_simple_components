import React from "react"

import NewsItem from "./NewsItem"

function News() {
  return (
    <aside>
      <input type="text" />
      <section>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
      </section>
    </aside>
  )
}

export default News
