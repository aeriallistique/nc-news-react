const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto rounded-t-sm ">
      <p className="text-sm">
        &copy; NNC, Coded by: Andrei Tazlauanu. All rights reserved {currentYear}.
      </p>
    </footer>
  );
};

export default Footer;