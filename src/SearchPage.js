import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneIcon from "@mui/icons-material/Tune";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1-1024x768.png"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming videos on this channel. Subscribe to get notified each time a new video is uploaded. Peace"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Learn Web Dev in 10 Days"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="Building a Youtube CLone"
        image="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1-1024x768.png"
      />
      `
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Learn Web Dev in 10 Days"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="Building a Youtube CLone"
        image="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1-1024x768.png"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Learn Web Dev in 10 Days"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="Building a Youtube CLone"
        image="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1-1024x768.png"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Learn Web Dev in 10 Days"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="Building a Youtube CLone"
        image="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1-1024x768.png"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Learn Web Dev in 10 Days"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="Building a Youtube CLone"
        image="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1-1024x768.png"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Learn Web Dev in 10 Days"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="Building a Youtube CLone"
        image="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1-1024x768.png"
      />
    </div>
  );
}

export default SearchPage;
