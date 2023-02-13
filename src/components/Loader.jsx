import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgba(0, 51, 128, 0.405)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
