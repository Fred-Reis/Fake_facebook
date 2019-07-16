import React from "react";

function PostTop({ author, date }) {
  return (
    <div className="post-top">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComents({ coments }) {
  return (
    <div className="post-coment">
      {coments.map(coment => (
        <div key={coment.id} className="coment">
          <img className="avatar" src={coment.author.avatar} />
          <p>
            <span>{coment.author.name}</span>
            {coment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function TimeLineIten({ author, date, content, coments }) {
  return (
    <div className="post">
      <PostTop author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComents coments={coments} />
    </div>
  );
}

export default TimeLineIten;
