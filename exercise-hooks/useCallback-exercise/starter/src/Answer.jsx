export const Answer = ({ calculateFunction, number }) => {
  const answer = calculateFunction(number);
  return (
    <p>
      Fibonacci number {number} is {answer}
    </p>
  );
};
