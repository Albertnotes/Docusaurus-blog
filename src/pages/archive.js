import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

/**
 * @typedef {Object} BlogPost - creates a new type named 'BlogPost'
 * @property {string} date - eg "2021-04-24T00:00:00.000Z"
 * @property {string} formattedDate - eg "April 24, 2021"
 * @property {string} title - eg "The Service Now API and TypeScript Conditional Types"
 * @property {string} permalink - eg "/2021/04/24/service-now-api-and-typescript-conditional-types"
 */

/** @type {BlogPost[]} */
const allPosts = ((ctx) => {
	/** @type {string[]} */
	const blogPostNames = ctx.keys();

	return blogPostNames.reduce((blogPosts, blogPostName, i) => {
		const module = ctx(blogPostName);
		const { date, formattedDate, title, permalink } = module.metadata;
		return [
			...blogPosts,
			{
				date,
				formattedDate,
				title,
				permalink,
			},
		];
	}, /** @type {string[]}>} */ ([]));
})(require.context('../../blog', false, /.md/));

const postsByYear = allPosts.reduceRight((posts, post) => {
	const year = post.date.split('-')[0];
	const yearPosts = posts.get(year) || [];
	return posts.set(year, [post, ...yearPosts]);
}, /** @type {Map<string, BlogPost[]>}>} */ (new Map()));

const yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({
	year,
	posts,
}));

const postTotal = Array.from(
	postsByYear,
	([year, posts]) => posts.length
).reduce((prev, curr) => prev + curr, 0);

function Year(
	/** @type {{ year: string; posts: BlogPost[]}} */ { year, posts }
) {
	return (
		<div className={clsx('col col--4', styles.feature)}>
			<h3>{year}</h3>
			<ul>
				{posts.map((post) => (
					<li key={post.date}>
						<Link to={post.permalink}>
							{post.formattedDate} - {post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

function BlogArchive() {
	return (
		<Layout title='Blog Archive'>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className='container'>
					<h1 className='hero__title'>歸檔</h1>
					<p className='hero__subtitle'>截至目前! 共有 {postTotal} 篇文章。</p>
				</div>
			</header>
			<main>
				{yearsOfPosts && yearsOfPosts.length > 0 && (
					<section className={styles.features}>
						<div className='container'>
							<div className='row'>
								{yearsOfPosts.map((props, idx) => (
									<Year key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default BlogArchive;
