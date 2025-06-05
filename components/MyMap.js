const MyMap = () => {
  return (
    <div style={{ width: "80vw", height: "450px", margin: "10px auto 0 auto" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.93162501138!2d74.59946957371498!3d16.879276583923826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230015b0c581%3A0xe2c5710210536d4f!2sQadri%20Bags%20Factory!5e0!3m2!1sen!2sin!4v1749105076689!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MyMap;
