const Logo = ({ className = '', ...props }) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 17"
      // width="200"
      // height="100"
      className={className}
      {...props}
    >
      <path d="M14.2 6.3l-.5.8 1.2.1-1.8 3.4h1l1.8-3.4h1.4l.5-.9zM9.9 6.3l-3.4 4.4h1.1l.8-1.1h1.3v-.8h-.6l1-1.3.1 3.2.8-.1-.1-4.3zM6.2 7.3l.5-.8H3.8l-2.6 4.2h1l.9-1.5h1.4l.4-.9H3.7l.6-1zM78.1 6.4l-2.6 4.2h1l2.1-3.4h1.8l-1.6 2.6h-1.3l-.5.8h2.3l2.5-4.2zM87.3 6.4h-3.1l-2.8 4.3h1.1L84 8.4l.5 2.4h.8L84.9 9h1l1.4-2.6m-1.9 1.7h-1.2l.5-.8h1.1l-.4.8M92.5 6.4l-2.1 3.4h-1.7l1.4-2.5 1.3-.1.5-.8h-2.3l-2.4 4.3h3.7l2.5-4.3zM95.7 6.4L93 10.6h1l2.2-3.4h1.1l-.4.8h-.7l-.6.9h1.7l1.5-2.6zM26.8 7.1L23.1 7l1.7-2.7h3.3l1-1.6h-5.4l-.1.1c-.2.4-1.1 1.8-2.8 4.5l-.3.4h1.1l-4.1 6.4h2l3.3-5.3h2.7l1.3-1.7M37.2 2.8h-6.3L27 8.9h1.8l-3.3 5.3h1.6l4.2-6.7h-1.6l1.9-3.1h2.8l-1.1 1.8-1.7-.1.6 8.1h1.6l-.5-6.6h.9zM41.3 8.9l.9-1.4h-4l2-3.1h3.7l1-1.6h-5.7l-3.8 6.1h2.7l-3.3 5.3h4.4l1.1-1.7h-2.7l2.3-3.6zM70.5 3.6v.9l1.6-1.7h-4l-3 4.7h-1.7l3-4.7h-1.9l-3.8 6.1h3.6l-2.2 3.5h-3.6l-1.2 1.9h5.5l6.7-10.7zM74 2.8l-3.1 3.3-.6 4.3-4.4 3.9 2.2-.1 4.3-3.7.5-4.4 3.4-3.4zM55.7 2.8l-3.8 6.1h1.9l-3.5 5.4h5.1l7.2-11.4-6.9-.1m-2.4 9.7l3.1-4.9h-1.7l1.9-3.1h3.2l-5.1 8.1-1.4-.1M46.9 2.8L43 8.9h1.9l-3.4 5.4h5l7.2-11.4-6.8-.1m-2.3 9.7l3-4.9h-1.7l1.9-3.1H51l-5.1 8.1-1.3-.1" />
    </svg>

    {/* <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" rx="16" fill="var(--secondary)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="var(--primary)"
      />
    </svg> */}
  </>
)

export default Logo
