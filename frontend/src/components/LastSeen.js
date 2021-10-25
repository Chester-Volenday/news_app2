import React from 'react';
import ReactTimeAgo from 'react-time-ago';

const LastSeen = ({ date }) => {
    return <ReactTimeAgo className="lastseen" date={date} locale="en-US" />;
}

export default LastSeen;