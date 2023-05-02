import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-fixed my-14 bg-newsletter">
      <div className="lg:py-8 lg:px-4 mx-auto max-w-screen-xl py-12 px-[6%]">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 sm:text-2xl tracking-tight font-extrabold text-white text-3xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto md:text-xs max-w-2xl font-light text-sm text-gray-300 pb-5">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form>
            <div className="flex items-center mx-auto mb-3 md:flex-col">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>

                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 sm:rounded-lg border border-gray-300 rounded-none rounded-l-lg focus:outline-none md:mb-3"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-3 mt-0 px-5 text-sm font-medium text-center text-white sm:rounded-lg border cursor-pointer rounded-none rounded-r-lg hover:text-black hover:bg-gray-300 hover:border-gray-300 duration-300"
              >
                Subscribe
              </button>
            </div>
            <div className="mx-auto text-sm text-left text-gray-300">
              We care about the protection of your data.
              <a href="#" className="font-medium text-gray-500 hover:underline">
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
