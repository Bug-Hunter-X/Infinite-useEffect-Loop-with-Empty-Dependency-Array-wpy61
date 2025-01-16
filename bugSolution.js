```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect runs!');
    // Cleanup function
    return () => {
      console.log('Cleanup function runs!');
      // Perform any necessary cleanup here, such as event listeners or subscriptions.
    };
  }, []); // Empty dependency array means this effect runs only once on mount and unmount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```