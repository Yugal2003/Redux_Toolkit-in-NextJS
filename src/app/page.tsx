import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
          <h1>Welcome To Home Page</h1>
          <Link href='/components/counter'><button className='btn'>Go To Counter Page</button></Link>
    </div>
  );
}
