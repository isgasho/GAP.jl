var documenterSearchIndex = {"docs":
[{"location":"#GAP.jl-1","page":"GAP.jl","title":"GAP.jl","text":"","category":"section"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"","category":"page"},{"location":"#Introduction-1","page":"GAP.jl","title":"Introduction","text":"","category":"section"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"TODO: describe the goals and non-goals of this package","category":"page"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"TODO: also link to JuliaInterface docs (also JuliaExperimental?)","category":"page"},{"location":"#Types-1","page":"GAP.jl","title":"Types","text":"","category":"section"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"FFE\nGapObj","category":"page"},{"location":"#GAP.FFE","page":"GAP.jl","title":"GAP.FFE","text":"FFE\n\nWraps a pointer to a GAP FFE immediate object. This type is defined in the JuliaInterface C code.\n\n\n\n\n\n","category":"type"},{"location":"#GAP.GapObj","page":"GAP.jl","title":"GAP.GapObj","text":"GapObj\n\nTODO\n\n\n\n\n\n","category":"type"},{"location":"#Macros-1","page":"GAP.jl","title":"Macros","text":"","category":"section"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"@gap\n@g_str","category":"page"},{"location":"#GAP.@gap","page":"GAP.jl","title":"GAP.@gap","text":"@gap <expr>\n@gap(<expr>)\n\nExecute <expr> directly in GAP, as if GAP.EvalString(\"<expr>\") was called. This can be used for creating GAP literals directly from Julia.\n\nExamples\n\njulia> @gap [1,2,3]\nGAP: [ 1, 2, 3 ]\n\njulia> @gap SymmetricGroup(3)\nGAP: Sym( [ 1 .. 3 ] )\n\njulia> @gap(SymmetricGroup)(3)\nGAP: Sym( [ 1 .. 3 ] )\n\n\nNote that the last two examples have a slight syntactical, and therefore also a semantical difference. The first one executes the string SymmetricGroup(3) directly inside GAP. The second example returns the function SymmetricGroup via @gap(SymmetricGroup), then calls that function with the argument 3.\n\nDue to Julia's way of handing over arguments into the code of macros, not all expressions representing valid GAP code can be processed. For example, the GAP syntax of permutations consisting of more than one cycle cause problems, as well as the GAP syntax of non-dense lists.\n\njulia> @gap (1,2,3)\nGAP: (1,2,3)\n\njulia> @gap (1,2)(3,4)\nERROR: LoadError: Error thrown by GAP: Error, no method found! For debugging hints type ?Recovery from NoMethodFound\n[...]\n\njulia> @gap [ 1,, 2 ]\nERROR: syntax: unexpected \",\"\n[...]\n\n\nNote also that a string argument gets evaluated with GAP.EvalString.\n\njulia> @gap \"\\\"abc\\\"\"\nGAP: \"abc\"\n\njulia> @gap \"[1,,2]\"\nGAP: [ 1,, 2 ]\n\njulia> @gap \"(1,2)(3,4)\"\nGAP: (1,2)(3,4)\n\n\n\n\n\n\n","category":"macro"},{"location":"#GAP.@g_str","page":"GAP.jl","title":"GAP.@g_str","text":"@g_str\n\nCreate a GAP string by typing g\"content\".\n\nExamples\n\njulia> g\"foo\"\nGAP: \"foo\"\n\n\n\n\n\n","category":"macro"},{"location":"#Conversions-1","page":"GAP.jl","title":"Conversions","text":"","category":"section"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"gap_to_julia()\njulia_to_gap()\n","category":"page"},{"location":"#Convenience-adapters-1","page":"GAP.jl","title":"Convenience adapters","text":"","category":"section"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"TODO: describe the various convenience / adapter methods we install, e.g. for basic arithmetic, accessing GAP list and record entries, calling GAP function, etc.","category":"page"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"TODO: Describe access to arbitrary GAP variables and functions via GAP.Globals.IDENTIFIER_NAME","category":"page"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"TODO: describe Help system integration","category":"page"},{"location":"#Index-1","page":"GAP.jl","title":"Index","text":"","category":"section"},{"location":"#","page":"GAP.jl","title":"GAP.jl","text":"","category":"page"}]
}
