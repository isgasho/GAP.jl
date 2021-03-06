#
# JuliaInterface: Interface to Julia
#
# This file contains package meta data. For additional information on
# the meaning and correct usage of these fields, please consult the
# manual of the "Example" package as well as the comments in its
# PackageInfo.g file.
#
SetPackageInfo( rec(

PackageName := "JuliaInterface",
Subtitle := "Interface to Julia",
Version := "0.4.4",
Date := "06/09/2020", # dd/mm/yyyy format
License := "GPL-2.0-or-later",

Persons := [
  rec(
    IsAuthor := true,
    IsMaintainer := true,
    FirstNames := "Sebastian",
    LastName := "Gutsche",
    WWWHome := "https://sebasguts.github.io",
    Email := "gutsche@mathematik.uni-siegen.de",
    PostalAddress := Concatenation(
                       "Department Mathematik\n",
                       "Universität Siegen\n",
                       "Walter-Flex-Straße 3\n",
                       "57072 Siegen\n",
                       "Germany" ),
    Place := "Siegen",
    Institution := "University of Siegen",
  ),
  rec(
    LastName      := "Horn",
    FirstNames    := "Max",
    IsAuthor      := true,
    IsMaintainer  := true,
    Email         := "horn@mathematik.uni-kl.de",
    WWWHome       := "https://www.quendi.de/math",
    PostalAddress := Concatenation(
                       "Fachbereich Mathematik\n",
                       "TU Kaiserslautern\n",
                       "Gottlieb-Daimler-Straße 48\n",
                       "67663 Kaiserslautern\n",
                       "Germany" ),
    Place         := "Kaiserslautern, Germany",
    Institution   := "TU Kaiserslautern"
  ),
],

PackageWWWHome := "http://TODO/",

ArchiveURL     := Concatenation( ~.PackageWWWHome, "JuliaInterface-", ~.Version ),
README_URL     := Concatenation( ~.PackageWWWHome, "README" ),
PackageInfoURL := Concatenation( ~.PackageWWWHome, "PackageInfo.g" ),

ArchiveFormats := ".tar.gz",

##  Status information. Currently the following cases are recognized:
##    "accepted"      for successfully refereed packages
##    "submitted"     for packages submitted for the refereeing
##    "deposited"     for packages for which the GAP developers agreed
##                    to distribute them with the core GAP system
##    "dev"           for development versions of packages
##    "other"         for all other packages
##
Status := "dev",

AbstractHTML   :=  "",

PackageDoc := [ rec(
  BookName  := "JuliaInterface",
  ArchiveURLSubset := ["doc"],
  HTMLStart := "doc/chap0.html",
  PDFFile   := "doc/manual.pdf",
  SixFile   := "doc/manual.six",
  LongTitle := "Interface to &Julia;",
) ],

Dependencies := rec(
  GAP := ">= 4.11",    # need compatible code in GAP's src/julia_gc.c
  NeededOtherPackages := [ ],
  SuggestedOtherPackages := [ ],
  ExternalConditions := [ ],
),

AvailabilityTest := function()
  if Filename( DirectoriesPackagePrograms( "JuliaInterface" ),
               "JuliaInterface.so" ) = fail then
    LogPackageLoadingMessage( PACKAGE_WARNING,
        [ "The kernel module of JuliaInterface is not available." ] );
    return false;
  fi;
  return true;
end,

# Show the julia version number in the banner string.
# (We assume that this function gets called *after* the package has been
# loaded, in particular after Julia has been started.)
BannerFunction := function( info )
  local str, version;

  str:= DefaultPackageBannerString( info );
  if not IsBoundGlobal( "JuliaEvalString" ) then
    return str;
  fi;
  version:= ValueGlobal( "JuliaEvalString" )( "string( VERSION )" );
  if not IsBoundGlobal( "JuliaToGAP" ) then
    return str;
  fi;
  version:= ValueGlobal( "JuliaToGAP" )( IsString, version );

  return ReplacedString( str, "Homepage",
             Concatenation( "(julia version is ", version, ")\nHomepage" ) );
end,

TestFile := "tst/testall.g",

#Keywords := [ "TODO" ],

));

