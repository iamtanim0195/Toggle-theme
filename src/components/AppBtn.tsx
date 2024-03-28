
interface ButtonProps {
    label: string;
    onClick?: () => void;
    color?: string;
}

const AppBtn: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button className={`btn-square rounded-md p-3 bg-blue-500`} onClick={onClick}>{label}</button>;
};

export default AppBtn;