const Message = ({ advice, adviceCount }) => {
  return (
    <div>
      <div className="w-[700px] container mx-auto mt-10 rounded-xl p-10 bg-teal-50 shadow-xl">
        <h3 className="text-center text-xl">{advice}</h3>
        <br />
        <p className="text-sm">
          You have read <span>{adviceCount}</span> pieces of advice
        </p>
      </div>
    </div>
  );
};

export default Message;
