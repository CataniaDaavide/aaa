//#region icon
import { Eye, EyeOff } from "lucide-react";
//#endregion


export function InputPassword({ placeholder, id, name, onChange }) {
  const [show, setShow] = useState(false);

  // click sul mostra password
  const handleShow = (e) => {
    try {
      e.preventDefault();
      setShow((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <Input className="border-r-0 pr-5" type={show ? "text" : "password"} />
      <Button
        onClick={handleShow}
        variant="secondary"
        size="icon"
        className="absolute top-0 right-0 border-1 border-l-0"
      >
        {show ? <Eye /> : <EyeOff />}
      </Button>
    </div>
  );
}

