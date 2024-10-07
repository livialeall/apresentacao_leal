const IconeSuperior = ({ page }: { page: string }) => {
  return (
    <div className=" flex align-center g-6">
      <p className="circle gradient-background shadow"></p>
      <div>{page}</div>
    </div>
  );
};
export default IconeSuperior;
