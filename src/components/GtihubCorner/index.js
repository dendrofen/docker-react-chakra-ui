import { Link } from "@chakra-ui/react";
import { Image } from "./image";

export function GithubCorner() {
    return (
        <Link
            href="https://github.com/inplayo-com/react-chakra-ui-bolerplate"
            className="github-corner"
            aria-label="View source on GitHub"
            isExternal
        >
            <Image />
        </Link>
    )
}