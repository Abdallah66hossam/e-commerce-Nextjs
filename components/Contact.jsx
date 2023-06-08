import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section class="bg-zinc-200 backdrop-blur-3xl my-24">
      <div class="py-12 mx-[6%]">
        <div>
          <p class="font-medium text-zinc-700">Contact us</p>

          <h1 class="mt-2 md:text-2xl font-semibold text-gray-800 text-3xl">
            Get in touch
          </h1>

          <p class="mt-3 text-gray-500">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div class="flex justify-between w-100 flex-wrap mt-10 gap-5">
          <div>
            <span class="inline-block p-3 text-zinc-700 rounded-full bg-zinc-100/80">
              <AiOutlineMail size={22} />
            </span>

            <h2 class="mt-4 text-lg font-medium text-gray-800">Email</h2>
            <p class="mt-2 text-gray-500">Our friendly team is here to help.</p>
            <p class="mt-2 text-zinc-700">hello@merakiui.com</p>
          </div>

          <div>
            <span class="inline-block p-3 text-zinc-700 rounded-full bg-zinc-100/80">
              <CiLocationOn size={22} />
            </span>

            <h2 class="mt-4 text-lg font-medium text-gray-800">Office</h2>
            <p class="mt-2 text-gray-500">Come say hello at our office HQ.</p>
            <p class="mt-2 text-zinc-700">
              100 Smith Street Collingwood VIC 3066 AU
            </p>
          </div>

          <div>
            <span class="inline-block p-3 text-zinc-700 rounded-full bg-zinc-100/80">
              <FaPhoneAlt size={20} />
            </span>

            <h2 class="mt-4 text-lg font-medium text-gray-800">Phone</h2>
            <p class="mt-2 text-gray-500">Mon-Fri from 8am to 5pm.</p>
            <p class="mt-2 text-zinc-700">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
