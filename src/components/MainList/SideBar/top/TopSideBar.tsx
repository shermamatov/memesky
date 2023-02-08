import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import "./TopSideBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import React from "react";
import { useAppDispatch } from "../../../../hooks/Perems";
import { getMemeAsync } from "../../../../store/async/AsyncMeme";

const TopSideBar = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [search, setSearch] = React.useState(searchParams.get("q") || "");
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        setSearchParams({
            q: search,
        });
        dispatch(getMemeAsync());
    }, [search]);

    const fetchByParams = async (query: string, value: any) => {
        const search = new URLSearchParams(location.search);
        if (value === "all") {
            search.delete(query);
        } else if (query == "_sort") {
            search.set(query, "price");
            search.set("_order", value);
        } else {
            search.set(query, value);
        }
        const url = `${location.pathname}?${search.toString()}`;
        navigate(url);
        dispatch(getMemeAsync());
    };

    return (
        <div className="side-block">
            <FormControl
                size="small"
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
            >
                <InputLabel htmlFor="outlined-adornment-password">
                    search
                </InputLabel>
                <OutlinedInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="outlined-adornment-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small">type</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Age"
                    onChange={(e) => fetchByParams("type", e.target.value)}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                    <MenuItem value="game">game</MenuItem>
                    <MenuItem value="live">live</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default TopSideBar;
