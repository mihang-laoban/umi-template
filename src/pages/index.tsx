import React from 'react';
import styles from './index.less';
import Welcome from "@/components/Welcome";
import Comment from "@/components/Comment";
import Clock from "@/components/Clock";
import Toggle from "@/components/Toggle";

let app = function() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Welcome name={123}/>
      <Welcome name={3}/>
      <Welcome name={2}/>
      <Welcome name={1}/>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Clock/>
      <Clock/>
      <Clock/>
      <Clock/>
      <Toggle/>
    </div>
  );
}

export default app
