import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';


const footerLinks = [
  { name: 'About', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
];

const callsToAction = [
  { name: 'Contact Us', href: '#', icon: PhoneIcon },
  { name: 'Watch Demo', href: '#', icon: PlayCircleIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#173b4f] text-white py-8 ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-indigo-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action Section */}
          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="mt-4 space-y-3">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-semibold hover:text-indigo-400"
                >
                  <item.icon aria-hidden="true" className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-white-400 hover:text-indigo-400">Facebook</a>
              <a href="#" className="text-white-400 hover:text-indigo-400">Twitter</a>
              <a href="#" className="text-white-400 hover:text-indigo-400">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t-2 border-red-700 pt-4 text-center text-sm">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
