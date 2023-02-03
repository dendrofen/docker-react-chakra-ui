import { Link } from "@chakra-ui/react";
import Image from "./image";

const GithubCorner = () => {
    return (
        <Link
            href="https://github.com/dendrofen/docker-react-chakra-ui"
            className="github-corner"
            aria-label="View source on GitHub"
            isExternal
        >
            <Image />
        </Link>
    )
}

export default GithubCorner;