import React from "react";
import {render} from '@testing-library/react'
import Button from "./index";
import {BrowserRouter as Route} from "react-router-dom"

test("Should not allowed if click isdisabled disabled is present disabled", () => {
    const {container} = render(<Button isDisabled></Button>);
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("If button have a link",() => {
    const {container} = render(<Button type="link" isExternal></Button>);
    expect(container.querySelector('a')).toBeInTheDocument()
    
})

test("If button have a class name isPrimary", () =>{
    const {container} = render(
    <Route>
        <Button type="link" href="" isPrimary/>
    </Route>
    )

    expect(container.querySelector('a.btn-primary')).toBeInTheDocument()
})