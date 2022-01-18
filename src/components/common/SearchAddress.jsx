import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const SearchAddress = (props) => {
  const [address, setAddress] = useState('')

  const onCompletePost = (data) => {
    console.log(data.address);
    setAddress(data.address);
  };

  return (
    <>
      <DaumPostcode
        onComplete={onCompletePost}
        autoClose
      />
    </>
  );
};

export default SearchAddress;