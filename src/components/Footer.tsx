export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ReferNet. All rights reserved.</p>
        </div>
      </footer>
    );
  }