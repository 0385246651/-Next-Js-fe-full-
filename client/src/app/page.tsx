import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import ButtonRedirect from "./components/ButtonRedirect";

const isAuth = false
export default function Home() {
  // if (!isAuth) {
  //   redirect("/register"); // chi dung dc cho server component
  // }
  return (
    <main >
      <div className="mt-auto">
        <h1 className="text-4xl text-center font-normal">Hế nhô các bạn . MÌnh là tôi đi code dạo!</h1>
        {/* <div>
          <Link href={'/login'} >Login</Link>
        </div>
        <div>
          <Link href={'/register'}>register</Link>
        </div> */}
        {/* client comp btn de dieu huong */}
        {/* <ButtonRedirect />

      <button>Chuyen sang trang Register</button> */}
      </div>
    </main>
  );
}
