import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout';
export default function EventPage() {
	const router = useRouter();
	console.log(router);
	return (
		<Layout>
			<h1>Event Page</h1>
		</Layout>
	);
}
