export default function ContactForm() {
    function handleSubmit(event) {
      event.preventDefault();
  
      const fd = new FormData(event.target);
      const data = Object.fromEntries(fd.entries());
  
      console.log(data);
  
      event.target.reset();
    }
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4 mb-20 p-4">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
          <label htmlFor="from" className="w-full sm:w-16 mb-2 sm:mb-0">
            From:
          </label>
          <input
            id="from"
            type="text"
            name="from"
            required
            className="border p-2 flex-1 h-8 w-full"
          />
        </div>
  
        <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
          <label htmlFor="email" className="w-full sm:w-16 mb-2 sm:mb-0">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border p-2 flex-1 h-8 w-full"
          />
        </div>
  
        <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
          <label className="w-full sm:w-16 mb-2 sm:mb-0">To:</label>
          <p className="flex-1 w-full">Sales</p>
        </div>
  
        <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
          <label htmlFor="subject" className="w-full sm:w-16 mb-2 sm:mb-0">
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            required
            className="border p-2 flex-1 h-8 w-full"
          />
        </div>
  
        <div className="flex flex-col sm:flex-row items-start sm:space-x-2">
          <label htmlFor="message" className="w-full sm:w-16 mb-2 sm:mb-0">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="border p-2 flex-1 h-24 w-full"
          />
        </div>
  
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="send-copy" name="copy" className="mr-2" />
          <label htmlFor="send-copy">Send me a copy</label>
        </div>
  
        <div className="flex space-x-4">
          <button type="reset" className="bg-gray-200 px-4 py-2 hover:opacity-60 w-full sm:w-auto">
            Reset
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 hover:opacity-60 w-full sm:w-auto">
            Send
          </button>
        </div>
      </form>
    );
  }
  