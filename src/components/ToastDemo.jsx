import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastDemo() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        onClick={() => toast.success("操作成功！ 🎉")}
        className="  w-fit px-10 py-1 bg-[#4A7056] text-white rounded cursor-pointer"
      >
        顯示成功提示
      </button>

      <button
        onClick={() => toast.error("發生錯誤！ 😢 ")}
        className="w-fit px-10 py-1 bg-red-600 text-white rounded cursor-pointer"
      >
        顯示錯誤提示
      </button>
    </div>
  );
}

export default ToastDemo;
