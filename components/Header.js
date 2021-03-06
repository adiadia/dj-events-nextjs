import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Search from './Search';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
					<a>Dj Events</a>
				</Link>
			</div>
			<Search />
			<nav>
				<ul>
					<li>
						<Link href='/events'>
							<a>Events</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
