/*export default function Layout(props) {
    return (
        <form>
            <h2>Create</h2>
            {props.children}
        </form>
    )
}*/
import React, { ReactNode } from "react";

// ReactNode는 React 컴포넌트의 자식으로 사용될 수 있는 모든 타입을 포괄..
// 이는 문자열, 숫자, JSX요소, 배열 또는 null, undefined 등을 포함. 'children' prop의 타입으로 자주 사용
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <form>
            <h2>Create</h2>
            {children}
        </form>
    );
}

export default Layout;