// import { login, signup } from "./actions";

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   );
// }

import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-14 text-center">향기조아</h2>

        <div className="relative mb-4">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder=" "
            className="peer block w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 z-10 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm
               peer-focus:-top-[8px] peer-focus:text-xs"
          >
            사용자이름, 이메일주소
          </label>
        </div>
        <div className="relative mb-[40px]">
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder=" "
            className="peer block w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-2 z-10 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm
               peer-focus:-top-[8px] peer-focus:text-xs"
          >
            비밀번호
          </label>
        </div>

        <div>
          <button
            formAction={login}
            className="block mx-auto hover:text-blue-600 text-gray-400 text12  py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            로그인 하기
          </button>

          <button
            formAction={signup}
            className="block mx-auto hover:text-green-600 text-gray-400 text12  py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            회원가입 하기
          </button>
        </div>
      </form>
    </div>
  );
}
