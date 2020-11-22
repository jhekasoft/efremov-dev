import { Button } from "@material-ui/core";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/" passHref>
        <Button variant="contained" color="primary" component="a">
          Home
        </Button>
      </Link>
    </>
  )
}
