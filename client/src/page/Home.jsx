import React, { useEffect, useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import Card from "../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllContentThunkMiddleware } from "../redux/features/content";

const Home = () => {
  const [sizes, setSizes] = useState(["50%", "auto"]);
  const [sizes1, setSizes1] = useState(["50vh", "auto"]);

  const { allContent } = useSelector((state) => state.content);

  return (
    <div className=" h-[100dvh] p-2 bg-white">
      {/* Content  */}
      <SplitPane
        split="horizontal"
        sizes={sizes}
        onChange={(sizes) => setSizes(sizes)}
        className="rounded-lg overflow-hidden space-y-2"
      >
        {/* Horizontal Content 1 */}
        <SplitPane
          sizes={sizes1}
          onChange={(sizes) => setSizes1(sizes)}
          className="space-x-2"
        >
          <Card contentData={allContent?.content1} componentNumber={1} />

          <Card contentData={allContent?.content2} componentNumber={2} />
        </SplitPane>

        {/* Horizontal Content 2 */}
        <Card contentData={allContent?.content3} componentNumber={3} />
      </SplitPane>
    </div>
  );
};

export default Home;
