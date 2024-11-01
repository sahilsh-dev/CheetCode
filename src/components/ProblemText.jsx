export default function ProblemText() {
	return (
		<div className="flex flex-col space-y-3 text-sm my-3">
			<p>
				Design a simplified version of Twitter where users can post tweets,
				follow/unfollow another user, and is able to see the <code>10</code>{" "}
				most recent tweets in the user's news feed.
			</p>
			<p>
				Implement the <code>Twitter</code> class:
			</p>
			<ul className="list-disc list-outside list space-y-3 ms-4">
				<li>
					<code>Twitter()</code> Initializes your twitter object.
				</li>
				<li>
					<code>void postTweet(int userId, int tweetId)</code> Composes a new
					tweet with ID tweetId by the user userId. Each call to this function
					will be made with a unique tweetId.
				</li>
				<li>
					<code>List&lt;Integer&gt; getNewsFeed(int userId)</code> Retrieves the
					10 most recent tweet IDs in the user's news feed. Each item in the
					news feed must be posted by users who the user followed or by the user
					themself. Tweets must be ordered from most recent to least recent.
				</li>
				<li>
					<code>void follow(int followerId, int followeeId)</code> The user with
					ID followerId started following the user with ID followeeId.
				</li>
				<li>
					<code>void unfollow(int followerId, int followeeId)</code> The user
					with ID followerId started unfollowing the user with ID followeeId.
				</li>
			</ul>
		</div>
	);
}
