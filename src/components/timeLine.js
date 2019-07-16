import React from "react";
import { Component } from "react";
import TimeLineIten from "./timeLineIten";

class Timeline extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Sin Kosta Nomur Okay",
          avatar: "https://i.pravatar.cc/150?img=34"
        },
        date: "12 jul 2019",
        content:
          "Je weet niet hoeveel ik heb gelopen Om hier te komen Ik reisde mijlen en mijlen voordat ik.",
        coments: [
          {
            id: 2,
            author: {
              name: "Fujiro Nakom Bi",
              avatar: "https://i.pravatar.cc/150?img=18"
            },
            date: "12 jul 2019",
            content:
              "naar bed ging Ik heb niet eens geslapen De mooiste bergen die ik heb beklommen."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Kio Kan Sado",
          avatar: "https://i.pravatar.cc/150?img=70"
        },
        date: "11 jul 2019",
        content:
          "Op de donkere nachten van de kou huilde ik, hé, hé hé, hé, hé, hé.",
        coments: [
          {
            id: 4,
            author: {
              name: "Van Lot Ada",
              avatar: "https://i.pravatar.cc/150?img=54"
            },
            date: "11 jul 2019",
            content: "Je weet niet hoeveel ik heb gelopen Om hier te komen."
          },
          {
            id: 5,
            author: {
              name: "Tombei Ka Fuka",
              avatar: "https://i.pravatar.cc/150?img=56"
            },
            date: "11 jul 2019",
            content: "Ik reisde mijlen en mijlen voordat ik naar bed ging."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postss">
        {posts.map(post => (
          <TimeLineIten key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default Timeline;
