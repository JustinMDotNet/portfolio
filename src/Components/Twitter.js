import React, { useEffect } from "react";

const Twitter = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <div>
                    Tweets by <a href="https://twitter.com/@JustinMDotNet" target="_blank">@JustinMDotNet</a>
                </div>
                <a
                    className="twitter-timeline"
                    data-theme="dark"
                    data-tweet-limit="2"
                    data-chrome="noheader nofooter noborders"
                    href="https://twitter.com/JustinMDotNet"
                />
            </div>
        </section>
    );
};

export default Twitter;